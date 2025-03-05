# from langchain.document_loaders import DirectoryLoader
from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.schema import Document
# from langchain.embeddings import OpenAIEmbeddings
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
import openai 
from dotenv import load_dotenv
import os
import shutil
# Load environment variables. Assumes that project contains .env file with API keys
load_dotenv()
#---- Set OpenAI API key 
# Change environment variable name from "OPENAI_API_KEY" to the name given in 
# your .env file.
openai.api_key = os.environ['OPENAI_API_KEY']

CHROMA_PATH = "chroma"
DATA_PATH = "data/books"
def main():
    generate_data_store()

def generate_data_store():
    documents = load_documents()
    print(documents)
    chunks = split_text(documents)
    print(len(chunks))
    save_to_chroma(chunks)

def load_documents():
    file_extensions = ["*.md", "*.txt"]

    if not os.path.exists(DATA_PATH) or not os.listdir(DATA_PATH):
        print(f"⚠️ Aucun fichier trouvé dans {DATA_PATH}")
        return []  # Retourne une liste vide pour éviter l'erreur

    loader = DirectoryLoader(DATA_PATH, glob="{*.md,*.txt}")
    documents = []
    for ext in file_extensions:
        loader = DirectoryLoader(DATA_PATH, glob=ext)
        documents.extend(loader.load())
    print(f"✅ {len(documents)} documents chargés.")
    return documents



def split_text(documents: list[Document]):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=3000,
        chunk_overlap=500,
        length_function=len,
        add_start_index=True,
    )
    chunks = text_splitter.split_documents(documents)
    print(f"Split {len(documents)} documents into {len(chunks)} chunks.")

    if len(chunks) > 10:
        print(f"📌 Nombre total de chunks générés : {len(chunks)}")

        document = chunks[10]
        print(document.page_content)
        print(document.metadata)
    else:
        print(f"❌ Erreur : la liste chunks contient seulement {len(chunks)} éléments, impossible d'accéder à index 10.")

    print(document.page_content)
    print(document.metadata)

    return chunks


def save_to_chroma(chunks: list[Document]):
    # Clear out the database first.
    if os.path.exists(CHROMA_PATH):
        shutil.rmtree(CHROMA_PATH)

    # Create a new DB from the documents.
    db = Chroma.from_documents(
        chunks, OpenAIEmbeddings(), persist_directory=CHROMA_PATH
    )
    db.persist()
    print(f"Saved {len(chunks)} chunks to {CHROMA_PATH}.")
if __name__ == "__main__":
    main()
# Langchain RAG

A Retrieval-Augmented Generation (RAG) implementation using LangChain and ChromaDB.

## 📦 Install Dependencies

Before installing the dependencies listed in `requirements.txt`, follow these steps based on your operating system:

### 🔹 MacOS Users

First, install the `onnxruntime` dependency for `chromadb` using:

```sh
conda install onnxruntime -c conda-forge
```

### 🔹 Windows Users

Follow [this guide](https://github.com/bycloudai/InstallVSBuildToolsWindows?tab=readme-ov-file) to install the Microsoft C++ Build Tools. Ensure that you complete the last step to set the environment variable path correctly.

### 🔹 Set Up Virtual Environment

Create and activate a virtual environment:

```sh
python -m venv venv
source venv/bin/activate  # On Mac/Linux
venv\Scripts\activate  # On Windows
```

### 🔹 Install Dependencies

Now, install the required dependencies:

```sh
pip install -r requirements.txt
```

### 🔹 Install Markdown Dependencies Manually

```sh
pip install "unstructured[md]"
```

✅ Our code supports `.txt` and `.md` formats for source files (`.txt` is natively supported by `unstructured`).

---

## 🗃️ Create Database

Ensure that your source files are located in `data/books` (you can modify this path as needed).

> **Note:** You'll need an OpenAI account and must set your OpenAI API key as an environment variable (`.env`) for this to work.

To create the Chroma database, run:

```sh
python create_database.py
```

---

## 🔎 Query the Database

To query the Chroma database, run:

```sh
python query_data.py "Who is the first love of Harry Potter?"
```

---

## 🧠 Understanding Embeddings Comparison

To better understand how embedding comparisons work, a Jupyter Notebook file (`compare_embedding.ipynb`) has been created. It demonstrates how to generate and compare embeddings using OpenAI's models.

### 📂 File: `compare_embedding.ipynb`

This notebook:

- Loads environment variables containing API keys.
- Uses OpenAI's embedding function to generate a vector representation of a word.
- Compares the similarity between two word embeddings using `pairwise_embedding_distance`.

You can run the notebook to explore how embeddings work and analyze their differences effectively.

Enjoy using Langchain RAG! 🚀

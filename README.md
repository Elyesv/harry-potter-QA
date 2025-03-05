# 🤓 Harry Potter Q&A – RAG with LangChain & ChromaDB

This project implements **Retrieval-Augmented Generation (RAG)** using **LangChain** and **ChromaDB** for a **Harry Potter Q&A system**. It consists of:

- **Backend**: A FastAPI-based API that processes user queries using **OpenAI embeddings** and **ChromaDB**.
- **Frontend**: A **React + TypeScript** application that provides an interactive chat interface for users to ask questions.

---

## 📂 Project Structure

```
├── backend/                 # API with FastAPI and ChromaDB
│   ├── create_database.py   # Script to create ChromaDB
│   ├── query_data.py        # Script to query ChromaDB
│   ├── api.py               # FastAPI server
│   ├── requirements.txt     # Backend dependencies
│   └── data/books/          # Source documents (Harry Potter books)
├── frontend/                # React + TypeScript frontend
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── pages/           # App pages (Home, Chat)
│   │   ├── App.tsx          # Main application component
│   │   ├── main.tsx         # Application entry point
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.ts       # Vite configuration
│   └── tailwind.config.ts   # Tailwind CSS configuration
├── .env                     # API keys (not included in repo)
├── Dockerfile               # Docker setup for deployment
└── README.md                # This document
```

---

# ⚙️ Installation & Setup

## 🛠 Backend Setup (FastAPI + ChromaDB)

### 1️⃣ **Install Dependencies**

Before installing the dependencies in `requirements.txt`, follow these OS-specific steps:

#### 🔹 MacOS Users

Install `onnxruntime` for `chromadb`:

```sh
conda install onnxruntime -c conda-forge
```

#### 🔹 Windows Users

Follow [this guide](https://github.com/bycloudai/InstallVSBuildToolsWindows?tab=readme-ov-file) to install the **Microsoft C++ Build Tools**.

#### 🔹 Set Up Virtual Environment

```sh
python -m venv venv
source venv/bin/activate  # On Mac/Linux
venv\Scripts\activate  # On Windows
```

#### 🔹 Install Backend Dependencies

```sh
pip install -r requirements.txt
```

#### 🔹 Install Markdown Dependencies Manually

```sh
pip install "unstructured[md]"
```

### 2️⃣ **Create the ChromaDB Database**

Ensure that your **source files** are located in `data/books/`. Then run:

```sh
python create_database.py
```

### 3️⃣ **Run the API Server**

Start the FastAPI server:

```sh
uvicorn api:app --reload
```

API will be available at: ``

### 4️⃣ **Test Querying the API**

```sh
curl -X POST "http://127.0.0.1:8000/ask" \
     -H "Content-Type: application/json" \
     -d '{"question": "Who is the first love of Harry Potter?"}'
```

---

## 🌟 Frontend Setup (React + TypeScript)

### 1️⃣ **Install Dependencies**

```sh
cd frontend
npm install
```

### 2️⃣ **Run the Development Server**

```sh
npm run dev
```

Frontend will be available at: ``

### 3️⃣ **Build for Production**

```sh
npm run build
```

The compiled files will be in the `dist/` directory.

---

# 🛠️ Technologies Used

### 🔹 **Backend**

- **FastAPI** – API framework
- **LangChain** – Retrieval-Augmented Generation (RAG)
- **ChromaDB** – Vector database
- **OpenAI Embeddings** – Text embeddings
- **Pydantic** – Data validation
- **Uvicorn** – ASGI server

### 🔹 **Frontend**

- **React 18 + TypeScript** – UI framework
- **React Router** – Navigation
- **Tailwind CSS** – Styling
- **Lucide React** – Icons
- **Vite** – Build tool

---

# 📈 API Endpoints

| Method | Endpoint | Description                                          |
| ------ | -------- | ---------------------------------------------------- |
| `POST` | `/ask`   | Ask a question and receive an AI-generated response. |

### 📝 Example Request:

```json
{
  "question": "Who is the first love of Harry Potter?"
}
```

### 📮 Example Response:

```json
{
  "response": "Cho Chang is considered to be Harry Potter's first love interest.",
  "sources": ["Harry Potter and the Order of the Phoenix"]
}
```

---

# 🔧 Deployment with Docker

### 1️⃣ **Build the Docker Image**

```sh
docker build -t harrypotter-rag .
```

### 2️⃣ **Run the Docker Container**

```sh
docker run -p 8000:8000 harrypotter-rag
```

---

# 🚀 Future Improvements

- ✅ **Enhance UI/UX** (add chat history, animations)
- ✅ **Deploy backend to a cloud service**
- ✅ **Use Redis for caching queries**
- ✅ **Improve response ranking with better embeddings**
- ✅ **Add support for more datasets**

---

# 🎉 Enjoy using LangChain RAG!

This project is open-source and contributions are welcome. 🚀\
If you have any issues, feel free to open an issue.


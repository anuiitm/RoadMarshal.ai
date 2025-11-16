# RoadMarshal AI: Road Safety Intervention Assistant

## Project Overview

RoadMarshal AI is an intelligent assistant designed to provide road safety intervention recommendations based on Indian Road Congress (IRC) standards. It features an interactive frontend for users to select road issues and receive AI-generated interventions, complete with relevant clauses and standards. The application also includes functionality to generate PDF reports of the recommendations.

## Features

*   **AI-Powered Recommendations:** Get precise road safety interventions based on IRC standards.
*   **Interactive Issue Selection:** User-friendly interface to select categories, issues, and subtypes.
*   **Dynamic Input Fields:** Add details like speed and notes for specific issues.
*   **PDF Report Generation:** Download detailed intervention reports in PDF format.
*   **Comprehensive Knowledge Base:** Utilizes a Retrieval-Augmented Generation (RAG) system with a FAISS vector store for accurate information retrieval.

## Technology Stack

### Frontend

The frontend is a modern web application built with:

*   **Next.js:** React framework for building full-stack web applications, enabling server-side rendering and static site generation.
*   **React:** JavaScript library for building user interfaces.
*   **TypeScript:** Superset of JavaScript for static typing.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
*   **Radix UI:** Accessible, unstyled UI components for building design systems.
*   **`next-themes`:** For theme management (e.g., dark mode).
*   **Axios:** Promise-based HTTP client for API communication.
*   **`html2canvas` & `jspdf`:** For client-side PDF report generation.
*   **`react-markdown` & `remark-gfm`:** For rendering Markdown content.
*   **Lucide React:** Icon library.

### Backend

The backend is a Python-based API that powers the AI recommendations:

*   **FastAPI:** High-performance web framework for building APIs.
*   **Uvicorn:** ASGI server to run the FastAPI application.
*   **Pydantic:** Data validation and settings management.
*   **FAISS-CPU:** For efficient similarity search in the vector store.
*   **Sentence-Transformers:** For generating text embeddings.
*   **PyTorch (`torch`) & Hugging Face Transformers:** Underlying libraries for embedding models.
*   **Pandas & NumPy:** For data processing and manipulation.
*   **`python-dotenv`:** For managing environment variables.
*   **DeepSeek API:** The large language model used for generating interventions (though `openai` library is present, DeepSeek is currently utilized).

## Setup and Installation

Follow these steps to set up and run the RoadMarshal AI project locally.

### Prerequisites

*   Node.js (LTS version recommended)
*   Python 3.9+
*   `pip` (Python package installer)
*   `npm` or `yarn` (Node.js package manager)

### 1. Clone the Repository

```bash
git clone https://github.com/anuiitm/RoadMarshal.ai.git
cd RoadMarshal.ai
```

### 2. Backend Setup

Navigate to the `backend` directory, create a virtual environment, install dependencies, and prepare the embeddings.

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt
python src/ingest.py
```

**Note:** Ensure you have a `.env` file in the `backend` directory with your DeepSeek API key (or other necessary API keys).

### 3. Frontend Setup

Open a new terminal, navigate to the `frontend` directory, and install dependencies.

```bash
cd ../frontend
npm install # or yarn install
```

## Running the Application

### 1. Start the Backend Server

In your `backend` terminal (where you activated the virtual environment):

```bash
uvicorn src.api:app --host 0.0.0.0 --port 8000 --reload
```

This will start the FastAPI server, typically accessible at `http://localhost:8000`.

### 2. Start the Frontend Development Server

In your `frontend` terminal:

```bash
npm run dev # or yarn dev
```

This will start the Next.js development server, typically accessible at `http://localhost:3000`.

## Usage

1.  Open your web browser and navigate to `http://localhost:3000`.
2.  Select the relevant categories and issues from the interactive interface.
3.  Provide additional details like speed and notes if prompted.
4.  Submit your query to receive AI-generated road safety intervention recommendations.
5.  Use the "Download PDF" button to save the report.

# VYRAQ — Digital Trust Intelligence

**Trust, backed by evidence.**

VYRAQ is a digital trust intelligence platform designed to help investigate suspicious digital content, detect potential manipulation, and assess the credibility of online information.

The project aims to bring together AI-assisted media analysis, evidence-based verification, and structured investigation workflows to help users make more informed decisions about the digital content they encounter.

> **Project Status:** Under active development.

---

## Overview

The rapid spread of manipulated images, AI-generated media, deepfakes, and misleading narratives makes it increasingly difficult to determine what information can be trusted.

VYRAQ aims to address this challenge through a structured verification workflow that focuses on evidence rather than assumptions.

The platform is being developed to investigate:

- Potentially manipulated or AI-generated images.
- Suspicious digital media and deepfakes.
- Misleading claims and narratives.
- Available evidence and indicators of content authenticity.

**Important:** AI-generated content is not automatically misinformation, and the absence of provenance does not automatically mean content is fake. VYRAQ aims to communicate findings with appropriate evidence and uncertainty.

## Key Features

### Current Implementation

- Professional landing page introducing the VYRAQ platform.
- Dashboard interface with sidebar navigation.
- New Investigation interface.
- Text and claim investigation input.
- Image selection interface for image analysis.

### Planned Features

- Backend API integration using Django REST Framework.
- Image analysis and manipulation detection.
- AI-assisted text and claim verification.
- Evidence collection and analysis.
- Investigation history and report generation.
- Confidence-aware findings and explainable results.

*Planned features are not yet implemented.*

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, CSS |
| Backend | Python, Django |
| API | Django REST Framework |
| Data Processing | NumPy, Pandas, SciPy |
| Machine Learning | Scikit-learn |
| Image Processing | OpenCV, Pillow |
| Version Control | Git, GitHub |

## Project Structure

```text
VYRAQ/
│
├── config/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── core/
│   ├── migrations/
│   ├── models.py
│   ├── views.py
│   └── admin.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── manage.py
├── .gitignore
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Sruti020/vyraq-digital-trust-intelligence.git
cd vyraq-digital-trust-intelligence
```

### 2. Backend Setup

Create and activate a Python virtual environment:

```bash
python -m venv venv
```

On Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```bash
pip install django djangorestframework python-dotenv numpy pandas scipy scikit-learn opencv-python Pillow
```

Create a `.env` file in the project root:

```env
DJANGO_SECRET_KEY=your_secret_key_here
```

Run database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

Backend: `http://127.0.0.1:8000/`

### 3. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Frontend: `http://localhost:5173/`

---

## Development Roadmap

- [x] Project initialization and branding
- [x] Django backend setup
- [x] React frontend setup
- [x] Landing page development
- [x] Dashboard interface
- [x] New Investigation interface
- [ ] Django REST API integration
- [ ] Image analysis pipeline
- [ ] Text and claim verification pipeline
- [ ] Evidence-based investigation results
- [ ] Investigation history and reports
- [ ] Testing and evaluation

## Project Vision

VYRAQ is being developed as a digital trust intelligence platform where suspicious content can be investigated through structured analysis and supporting evidence.

The long-term goal is to make digital content verification more transparent, explainable, and accessible.

---

## Author

**Srutirani Sahoo**

Computer Science and Engineering Student

GitHub: [@Sruti020](https://github.com/Sruti020)

---

*VYRAQ — Trust, backed by evidence.*

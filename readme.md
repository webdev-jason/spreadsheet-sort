![GitHub last commit](https://img.shields.io/github/last-commit/webdev-jason/spreadsheet-sort?style=flat-square)
![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![GitHub license](https://img.shields.io/github/license/webdev-jason/spreadsheet-sort?style=flat-square)

# 📊 Spreadsheet Data Separation Tool

A hybrid desktop application designed to automate the segmentation of master production spreadsheets. It extracts data based on unique identifiers (such as Lot Numbers) and generates individual, formatted Excel reports for manufacturing and quality control workflows.

## ✨ Features
* **🎯 Precision Segmentation**: Uses a Python engine to split large datasets into individual files based on specific column values.
* **🎨 Intelligent Formatting**: Preserves original Excel styling and automatically applies customized formatting to exported reports.
* **📂 Native File Handling**: Features a native OS file dialog for selecting source workbooks and defining output directories.
* **⚡ Hybrid Architecture**: Combines a modern Electron GUI with the high-performance data processing of the Python `pandas` library.
* **🛠️ Dynamic UI**: Real-time feedback and directory shortcuts to immediately access processed exports.

## 🛠️ Tech Stack
* **UI Framework**: Electron
* **Logic Engine**: Python 3.10+ (`pandas`, `openpyxl`)
* **Frontend**: HTML5, Vanilla JavaScript (ES6+)
* **Inter-Process Communication**: Electron `ipcMain` / `ipcRenderer` and `child_process` execution.

## 🚀 Installation & Local Setup

### 1. Prerequisites
* **Node.js**: LTS version.
* **Python 3.10+**: Ensure Python is added to your system PATH.

### 2. Repository Setup
```bash
# Clone the repository
git clone [https://github.com/webdev-jason/spreadsheet-sort.git](https://github.com/webdev-jason/spreadsheet-sort.git)

# Navigate to the directory
cd spreadsheet-sort

# Install Node dependencies
npm install
```

### 3. Python Environment
```bash
# Create and activate a virtual environment
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt
```

### 4. Running the App
```bash
npm start
```

## 👤 Author
**Jason Sparks** - [GitHub Profile](https://github.com/webdev-jason)

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
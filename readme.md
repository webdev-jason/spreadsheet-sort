![GitHub last commit](https://img.shields.io/github/last-commit/webdev-jason/spreadsheet-sort?style=flat-square)
![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![GitHub license](https://img.shields.io/github/license/webdev-jason/spreadsheet-sort?style=flat-square)

# 📊 Spreadsheet Data Separation Tool

A hybrid desktop application designed to automate the segmentation of master production spreadsheets. It surgically extracts sheets based on specific Lot Numbers while preserving all original formatting, conditional rules, and Excel styles.

## ✨ Features
* **🎯 Surgical Extraction**: Scans Column C across hundreds of sheets to identify and isolate specific production lots.
* **🎨 High-Fidelity Preservation**: Uses a template duplication strategy to ensure 100% of original Excel styling, borders, and conditional formatting remain intact.
* **📂 Native Integration**: Uses native Windows file dialogs for secure and reliable file path handling.
* **⚡ Hybrid Performance**: Combines a modern Electron GUI with the robust spreadsheet manipulation power of openpyxl and pandas.
* **📁 One-Click Access**: Features a direct link to the output directory immediately upon successful processing.

## 🛠️ Tech Stack
* **UI Framework**: Electron
* **Logic Engine**: Python 3.12+ (openpyxl, pandas)
* **Bridge**: Electron contextBridge for secure IPC (Inter-Process Communication).
* **Packaging**: electron-builder with NSIS installer configuration.

## 🚀 Getting Started

### For Users (Production)
Download the latest spreadsheet-sort-setup-1.0.0.exe from the Releases page. Run the installer to add the tool to your computer. This provides a faster startup compared to portable versions.

### For Developers (Local Setup)
1. **Clone & Install Node Dependencies**
   git clone https://github.com/webdev-jason/spreadsheet-sort.git
   cd spreadsheet-sort
   npm install

2. **Setup Python Environment**
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   pip install -r requirements.txt

3. **Run in Development Mode**
   npm start

## 📦 Building the Installer
To generate a new NSIS installer that allows users to select an installation directory:
npm run dist

## 👤 Author
**Jason Sparks** - [GitHub Profile](https://github.com/webdev-jason)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
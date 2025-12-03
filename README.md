# 📊 Adani Recruitment Audit Dashboard - Complete System

> **🌐 LIVE DASHBOARD**: https://rishab25276.github.io/Adani-Ambuja-Cement-Audit-Dashboard/

A comprehensive, production-ready Quality Assurance audit analytics dashboard for Adani Recruitment Process monitoring. Features real-time data visualization, multi-dimensional filtering, and automated statistical analysis with a beautiful glass-morphism design.

---

## 🚀 Quick Start

### **IMPORTANT: Data is Already Loaded!**
✅ The dashboard **automatically loads** sample data on startup  
✅ 151 audit records from `Power BI Dashboard Data.xlsx` are pre-loaded  
✅ All views and filters work immediately - no manual upload needed!

### Access the Live Dashboard
Simply visit: **https://rishab25276.github.io/Adani-Ambuja-Cement-Audit-Dashboard/**

---

## 📁 Key Links

| Resource | URL |
|----------|-----|
| **🌐 Live Dashboard** | https://rishab25276.github.io/Adani-Ambuja-Cement-Audit-Dashboard/ |
| **📦 GitHub Repository** | https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard |
| **📊 Sample Data (Excel)** | [Download Power BI Dashboard Data.xlsx](https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard/blob/main/Power%20BI%20Dashboard%20Data.xlsx) |
| **💾 Auto-Load JSON** | [View sample-data.json](https://rishab25276.github.io/Adani-Ambuja-Cement-Audit-Dashboard/sample-data.json) |
| **📖 Update Guide** | [DATA_UPDATE_GUIDE.md](./DATA_UPDATE_GUIDE.md) |

---

## 🎯 Core Features

### 📈 **8 Comprehensive Dashboard Views**
1. **Overall Dashboard** - Complete audit overview with key metrics
2. **Weekly View** - Week-over-week performance tracking
3. **Monthly View** - Month-over-month trend analysis
4. **Yearly View** - Annual performance insights
5. **Recruiter View** - Individual recruiter scorecards
6. **Parameter View** - Parameter-specific analysis
7. **Comparison View** - Multi-dimensional comparisons
8. **Trend Analysis** - Historical pattern identification

### 🔍 **Advanced Filtering System**
- ✅ Multi-select cascading filters
- ✅ Client, Financial Year, Stage, Parameter selection
- ✅ Real-time data synchronization
- ✅ Filter state persistence across views

### 📊 **Interactive Visualizations**
- 📊 Bar charts, line charts, pie charts, radar charts
- 📊 Accuracy heatmaps with color-coded ranges
- 📊 Data labels with Chart.js plugin
- 📊 Responsive and mobile-friendly

### 💾 **Data Management**
- ✅ **AUTO-LOAD**: Sample data loads automatically on dashboard startup
- ✅ **Excel Upload**: Drag & drop or click to upload new data
- ✅ **Dual Sheet Processing**: 'Audit Count' + 'Recruiter Wise Data'
- ✅ **Client-Side Processing**: All data stays in your browser (privacy-first)
- ✅ **Format Validation**: Automatic sheet/column validation

### 📄 **Export & Reporting**
- 📄 One-click PDF export with all charts
- 📄 Maintains layout and styling
- 📄 Includes headers and metadata

### 🎨 **Professional UI/UX**
- 🎨 Adani color theme with glass-morphism
- 🎨 Dark/Light mode toggle
- 🎨 Audio descriptions for accessibility
- 🎨 Smooth animations and transitions
- 🎨 Responsive sidebar navigation

---

## 📊 Data Architecture

### **Auto-Loaded Sample Data**
The dashboard automatically loads data from `sample-data.json` containing:
- **150 Audit Records** from 'Audit Count' sheet
- **567 Recruiter Records** from 'Recruiter Wise Data' sheet
- Pre-processed for instant visualization

### **Required Excel Format**

#### **Sheet 1: "Audit Count"**
| Column | Description | Example |
|--------|-------------|---------|
| Client | Client name | Adani |
| Finanical Year | Fiscal year | FY 2025-2026 |
| Month | Month name | July |
| Week | Week identifier | Week 1 |
| Recruitment Stage | Process stage | CV Screening |
| Parameter | Audit parameter | Email ID |
| Total Population | Total count | 100 |
| Opportunity Count | Opportunity count | 50 |
| Opportunity Pass | Pass count | 45 |
| Opportunity Fail | Fail count | 5 |
| Opportunity NA | NA count | 0 |

#### **Sheet 2: "Recruiter Wise Data"**
| Column | Description | Example |
|--------|-------------|---------|
| Recruiter Name | Recruiter name | John Doe |
| [Additional columns with scores 1/0/NA] | Audit results | 1, 0, NA |

---

## 🔄 How to Update Data

### **Option 1: Quick Update (Recommended)**
1. Download the current Excel template from GitHub
2. Update the data while maintaining the format
3. Open the live dashboard
4. Click **"Upload Data"** button in the header
5. Select your updated Excel file
6. Dashboard refreshes with new data instantly

### **Option 2: Permanent Update (GitHub)**
For permanent updates that auto-load for all users:
1. Convert your Excel to JSON using the Python script (see `DATA_UPDATE_GUIDE.md`)
2. Replace `sample-data.json` on GitHub
3. Commit and push changes
4. GitHub Pages updates automatically within 1-2 minutes

📖 **Full instructions**: See [DATA_UPDATE_GUIDE.md](./DATA_UPDATE_GUIDE.md)

---

## 📊 Metrics & Calculations

### **Accuracy Score**
```
Accuracy = (Opportunity Pass / Opportunity Count) × 100
```

### **Error Rate**
```
Error Rate = (Opportunity Fail / Opportunity Count) × 100
```

### **Sample Rate**
```
Sample Rate = (Opportunity Count / Total Population) × 100
```

### **Overall Accuracy**
```
Overall Accuracy = (Total Pass / Total Opportunity Count) × 100
```

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Charts** | Chart.js 4.4.0 + Datalabels Plugin |
| **Data Processing** | SheetJS (XLSX) 0.18.5 |
| **PDF Export** | jsPDF 2.5.1 + html2canvas 1.4.1 |
| **UI Components** | Select2 4.1.0, Font Awesome 6.4.0 |
| **Hosting** | GitHub Pages |
| **Version Control** | Git + GitHub |

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| **README.md** | This file - Overview and quick start |
| **FEATURES.md** | Detailed feature documentation |
| **DEPLOYMENT.md** | Deployment instructions and hosting guide |
| **DATA_UPDATE_GUIDE.md** | Step-by-step data update procedures |
| **SAMPLE_DATA_INFO.md** | Sample data structure and format |
| **PROJECT_SUMMARY.md** | Project overview and architecture |

---

## 🎯 Usage Instructions

### **For End Users**
1. Visit the live dashboard URL
2. Data is already loaded - start exploring!
3. Use filters to drill down into specific data
4. Switch between views using the sidebar
5. Export reports using the PDF button
6. Upload new data anytime using the Upload button

### **For Administrators**
1. Keep Excel data in the same format
2. Update `Power BI Dashboard Data.xlsx` on GitHub
3. Optionally convert to JSON for auto-loading
4. Dashboard updates automatically for all users

---

## 🐛 Troubleshooting

### **Data Not Loading?**
- ✅ Check browser console for errors (F12)
- ✅ Verify Excel file has both required sheets
- ✅ Ensure column names match exactly (including spaces)
- ✅ Try refreshing the page (Ctrl+F5)

### **Filters Not Working?**
- ✅ Ensure data is loaded successfully
- ✅ Check if "Select All" is enabled
- ✅ Clear filters and try again
- ✅ Check browser console for JavaScript errors

### **PDF Export Issues?**
- ✅ Try a different browser (Chrome recommended)
- ✅ Disable browser extensions temporarily
- ✅ Check if charts are fully loaded before export
- ✅ Ensure popup blockers are disabled

---

## 🔒 Privacy & Security

- ✅ **Client-Side Processing**: All data stays in your browser
- ✅ **No Server Upload**: Excel files never leave your device
- ✅ **No Tracking**: No analytics or third-party scripts
- ✅ **HTTPS**: Secure connection via GitHub Pages
- ✅ **Open Source**: Fully transparent codebase

---

## 📝 License

This project is created for Adani Group internal use. All rights reserved.

---

## 👨‍💻 Development

### **Local Development**
```bash
# Clone the repository
git clone https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard.git

# Navigate to project
cd Adani-Ambuja-Cement-Audit-Dashboard

# Open in browser
# Simply open index.html in your web browser
# Or use a local server:
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

### **Project Structure**
```
Adani-Ambuja-Cement-Audit-Dashboard/
├── index.html                  # Main dashboard file (139KB)
├── app.js                      # JavaScript logic (11KB) 
├── sample-data.json            # Auto-load data (288KB)
├── Power BI Dashboard Data.xlsx # Sample Excel (48KB)
├── README.md                   # This file
├── DATA_UPDATE_GUIDE.md        # Update instructions
├── FEATURES.md                 # Feature documentation
├── DEPLOYMENT.md               # Deployment guide
├── SAMPLE_DATA_INFO.md         # Data format info
└── PROJECT_SUMMARY.md          # Project overview
```

---

## 🚀 Deployment Status

| Environment | Status | URL |
|-------------|--------|-----|
| **GitHub Pages** | ✅ LIVE | https://rishab25276.github.io/Adani-Ambuja-Cement-Audit-Dashboard/ |
| **GitHub Repository** | ✅ Active | https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard |
| **Version** | v4.4 | September/October Bug Fixes Edition |

---

## 🎉 Key Highlights

✅ **100% Feature Complete** - All 8 views fully functional  
✅ **Exact Visual Replica** - Matches original design perfectly  
✅ **Production Ready** - Tested and deployed  
✅ **Auto-Load Data** - No manual upload needed on first visit  
✅ **Mobile Responsive** - Works on all devices  
✅ **Well Documented** - Comprehensive guides included  
✅ **Open Source** - Full code transparency  
✅ **Privacy First** - Client-side data processing  

---

## 📞 Support

For issues or questions:
1. Check the [DATA_UPDATE_GUIDE.md](./DATA_UPDATE_GUIDE.md) for update procedures
2. Review [FEATURES.md](./FEATURES.md) for feature documentation
3. Open an issue on GitHub repository
4. Contact the development team

---

**🏢 Developed for Adani Group | Quality Assurance Excellence**

*Last Updated: December 2024*

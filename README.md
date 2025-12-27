# QOTD System - Quick Start Guide

## 🚀 Quick Setup

### Backend

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies** (if not already done)
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Edit `.env` file and add your API keys:
   ```env
   # Optional: For AI editorial generation
   GEMINI_API_KEY=your_gemini_api_key_here
   
   # Optional: For problem scraping (if not already set)
   SCRAPER_API_KEY=your_scraper_api_key_here
   
   # Optional: Enable automated daily questions
   ENABLE_AUTO_QOTD=false  # Set to true to enable
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

Server will start on `http://localhost:3000`

### Frontend

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

Frontend will start on `http://localhost:5173`

## ✅ Verify Installation

1. **Check backend health**
   ```bash
   curl http://localhost:3000/health
   ```

2. **Open frontend**
   - Navigate to `http://localhost:5173`
   - Sign up or log in
   - Link your Codeforces handle

## 🎯 New Features

### For All Users
- **My Submissions**: Click button in header to view your last 24 hours of Codeforces submissions
- **AI Editorials**: View AI-generated editorials for questions (after solving or next day)
- **Enhanced UI**: Improved responsive design and loading states

### For Admins
- **Analytics Dashboard**: Click "Analytics" button to view system statistics
- **Health Monitoring**: Access `/health` endpoint for MTBF/MTTR metrics
- **Admin Logs**: View all admin actions in the analytics dashboard

## 📝 Key Endpoints

- `GET /health` - System health check
- `GET /api/v1/qotd/today` - Today's question
- `GET /api/v1/qotd/leaderboard` - Leaderboard
- `GET /api/admin/analytics` - Admin analytics (admin only)

## 🔧 Configuration

All configuration is in `backend/.env`:

```env
# Cron schedule (default: midnight daily)
CRON_SCHEDULE=0 0 * * *

# Enable/disable automated QOTD
ENABLE_AUTO_QOTD=false

# Question difficulty range
MIN_QUESTION_RATING=800
MAX_QUESTION_RATING=1200
```

## 📚 Documentation

See [`walkthrough.md`](file:///C:/Users/rahul/.gemini/antigravity/brain/48c6c264-f209-4105-b390-8a1d54ec4c26/walkthrough.md) for complete documentation.

## 🐛 Troubleshooting

**Backend won't start?**
- Check database connection in `.env`
- Run `npx prisma generate`

**Cron not running?**
- Set `ENABLE_AUTO_QOTD=true` in `.env`
- Check console logs for errors

**AI editorials not working?**
- Add `GEMINI_API_KEY` to `.env`
- Fallback editorials will still be created

## 🎉 You're all set!

The system now includes:
✅ Automated daily questions  
✅ AI-generated editorials  
✅ Health monitoring (MTBF/MTTR)  
✅ Rate limiting  
✅ Admin analytics  
✅ Submission history  
✅ Enhanced UI/UX  

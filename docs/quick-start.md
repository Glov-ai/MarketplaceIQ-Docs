---
id: quick-start
title: Quick Start Guide
sidebar_position: 2
---

# Quick Start Guide

Get started with MarketplaceIQ in minutes. This guide will walk you through the basic setup and your first content enrichment process.

## Prerequisites
- A MarketplaceIQ account
- Access to your e-commerce platform
- Basic API knowledge (for API integration)

## Steps to Get Started

### 1. Account Setup
1. Sign up at [MarketplaceIQ Dashboard](https://dashboard.marketplaceiq.io)
2. Verify your email address
3. Complete organization profile
4. Get your API credentials

### 2. Authentication
1. Locate your API key in the dashboard
2. Test authentication using our API:
```bash
curl -X POST https://api.marketplaceiq.io/v1/auth
  -H "Content-Type: application/json"
  -d '{"apiKey": "your-api-key"}'
```

### 3. First Product Upload
1. Prepare your product data file
2. Upload via Dashboard or API
3. Monitor processing status

### 4. Viewing Results
1. Access the enrichment results
2. Review quality scores
3. Export enhanced content
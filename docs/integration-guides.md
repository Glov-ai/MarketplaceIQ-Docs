---
id: integration-guides
title: Integration Guides
sidebar_position: 4
---

# Integration Methods

## Upload Interface

### Web Dashboard
- Drag-and-drop interface
- Bulk upload support
- Progress monitoring
- Result visualization

### File Formats
- CSV
- JSON
- XML
- Excel (XLSX)

## API Reference

### Authentication
```bash
curl -X POST https://api.marketplaceiq.io/v1/auth
  -H "Content-Type: application/json"
  -d '{"apiKey": "your-api-key"}'
```

### Upsert Operations
```bash
curl -X POST https://api.marketplaceiq.io/v1/products
  -H "Authorization: Bearer {token}"
  -H "Content-Type: application/json"
  -d '{
    "products": [
      {
        "id": "prod123",
        "title": "Sample Product",
        "description": "Product description",
        "images": ["url1", "url2"]
      }
    ]
  }'
```

### Delete Operations
```bash
curl -X DELETE https://api.marketplaceiq.io/v1/products/{productId}
  -H "Authorization: Bearer {token}"
```

### Rate Limits
- 1000 requests per minute
- 10,000 products per batch
- 100MB max file size
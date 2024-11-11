import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css";
import Layout from '@theme/Layout';


export default function ApiDoc() {
  return (
    <Layout
      title="API Reference"
      description="MarketplaceIQ API Documentation">
      <div className="container margin-vert--lg">
        <SwaggerUI
          url="/openapi.json"  // This will load from your static directory
          deepLinking={true}
          defaultModelsExpandDepth={-1}
          displayOperationId={false}
          filter={true}
          showExtensions={false}
          showCommonExtensions={false}
          layout="BaseLayout"
        />
      </div>
    </Layout>
  );
}
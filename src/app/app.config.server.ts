import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

// ⚠️ IMPORTANT: Import the base application configuration to extend it
import { appConfig } from './app.config'; 

// 1. Define the server-specific providers
const serverConfig: ApplicationConfig = {
  providers: [
    // This is the essential provider for Server-Side Rendering (SSR)
    provideServerRendering()
  ]
};

// 2. Merge the client (appConfig) and server configurations
// This ensures that all essential providers (like routing, hydration, etc.) 
// from your base appConfig are also included for the server build.
export const config = mergeApplicationConfig(appConfig, serverConfig);
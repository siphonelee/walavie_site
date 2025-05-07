import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.post('/api/newsletter', async (req, res) => {
    try {
      // Validate email
      const schema = z.object({
        email: z.string().email({ message: "Invalid email address" })
      });
      
      const validatedData = schema.parse(req.body);
      
      // In a production app, this would save to a newsletter subscription service
      // or database. For now, just return success.
      res.status(200).json({ success: true, message: "Subscription successful" });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: error instanceof z.ZodError 
          ? error.errors[0]?.message || "Validation error" 
          : "Invalid request" 
      });
    }
  });

  app.post('/api/contact', async (req, res) => {
    try {
      // Validate contact form submission
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Save to storage
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully", 
        id: submission.id 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: error instanceof z.ZodError 
          ? error.errors[0]?.message || "Validation error" 
          : "Invalid request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

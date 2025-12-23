
import { GoogleGenAI } from "@google/genai";

// Fix: Always use process.env.API_KEY directly in the constructor as per SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRepairDiagnostic = async (problemDescription: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The user has the following repair problem: "${problemDescription}". 
      Provide a brief, helpful assessment of the potential issue and suggest whether they need immediate emergency assistance or a scheduled visit. 
      Keep the tone professional and reassuring, reflecting the 'Al Jeffers & Sons' brand (family-owned, dependable).`,
      config: {
        // Fix: Removed maxOutputTokens without thinkingBudget to prevent potential response truncation or blocking
        temperature: 0.7,
      },
    });
    // Fix: Access the .text property directly (not a method) as per current SDK
    return response.text;
  } catch (error) {
    console.error("AI Diagnostic Error:", error);
    return "I'm sorry, I'm having trouble connecting to our diagnostic tool right now. Please call us directly at +1 802-365-4447 for immediate assistance.";
  }
};

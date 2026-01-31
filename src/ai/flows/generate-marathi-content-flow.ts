'use server';
/**
 * @fileOverview A Genkit flow for generating Marathi content variations from English input.
 *
 * - generateMarathiContent - A function that handles the generation of Marathi content.
 * - GenerateMarathiContentInput - The input type for the generateMarathiContent function.
 * - GenerateMarathiContentOutput - The return type for the generateMarathiContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarathiContentInputSchema = z.object({
  englishContent: z
    .string()
    .describe('The English content to be translated and adapted to Marathi.'),
});
export type GenerateMarathiContentInput = z.infer<typeof GenerateMarathiContentInputSchema>;

const GenerateMarathiContentOutputSchema = z.object({
  marathiContent: z
    .string()
    .describe('The translated and adapted Marathi content.'),
});
export type GenerateMarathiContentOutput = z.infer<typeof GenerateMarathiContentOutputSchema>;

export async function generateMarathiContent(
  input: GenerateMarathiContentInput
): Promise<GenerateMarathiContentOutput> {
  return generateMarathiContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarathiContentPrompt',
  input: {schema: GenerateMarathiContentInputSchema},
  output: {schema: GenerateMarathiContentOutputSchema},
  prompt: `You are an expert in Marathi language and culture. Please translate the following English content into Marathi and adapt it to be engaging and culturally relevant for a Marathi-speaking audience. Provide a few variations to choose from.\n\nEnglish Content: {{{englishContent}}}\n\nMarathi Content:`,
});

const generateMarathiContentFlow = ai.defineFlow(
  {
    name: 'generateMarathiContentFlow',
    inputSchema: GenerateMarathiContentInputSchema,
    outputSchema: GenerateMarathiContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

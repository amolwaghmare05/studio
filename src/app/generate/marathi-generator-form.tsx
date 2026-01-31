'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateMarathiContent } from '@/ai/flows/generate-marathi-content-flow';
import { Loader2, Copy, Check } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  englishContent: z.string().min(10, {
    message: 'Please enter at least 10 characters.',
  }),
});

export function MarathiGeneratorForm() {
  const [marathiContent, setMarathiContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      englishContent: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setMarathiContent('');
    try {
      const result = await generateMarathiContent(values);
      setMarathiContent(result.marathiContent);
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate content. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = () => {
    if (marathiContent) {
      navigator.clipboard.writeText(marathiContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      toast({
        title: 'Copied!',
        description: 'Marathi content has been copied to your clipboard.',
      });
    }
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="englishContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">English Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'Welcome to our group website! We are happy to have you here.'"
                      className="min-h-[120px] text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Marathi Content'
              )}
            </Button>
          </form>
        </Form>

        {(isLoading || marathiContent) && (
            <div className="mt-6">
                <Separator />
            </div>
        )}

        {isLoading && (
            <div className="mt-6 space-y-4 animate-pulse">
                <div className="h-6 w-1/3 rounded bg-muted"></div>
                <div className="space-y-2">
                    <div className="h-4 rounded bg-muted"></div>
                    <div className="h-4 w-5/6 rounded bg-muted"></div>
                    <div className="h-4 w-4/6 rounded bg-muted"></div>
                </div>
            </div>
        )}

        {marathiContent && !isLoading && (
          <div className="mt-6">
            <Card className="bg-secondary/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg font-semibold">Generated Marathi Content</CardTitle>
                    <Button variant="ghost" size="icon" onClick={handleCopy}>
                    {isCopied ? (
                        <Check className="h-5 w-5 text-green-500" />
                    ) : (
                        <Copy className="h-5 w-5" />
                    )}
                    <span className="sr-only">Copy content</span>
                    </Button>
                </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap text-base text-foreground/90">{marathiContent}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

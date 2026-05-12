import * as z from 'zod';

const MAX_FILE_SIZE = 5_000_000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const productLargeSchema = z.object({
  // Basic Information
  brand: z.string().min(1, 'Please select a brand'),
  category: z.string().min(1, 'Please select a category'),
  gender: z.string().optional(),
  price: z.number({ message: 'Price is required' }),
  name: z.string().min(2, 'Product name must be at least 2 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  // SEO
  pageTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  // Visibility
  visibility: z.enum(['published', 'schedule', 'hidden']).default('published'),
  publishDate: z.string().optional(),
  // Parent Category
  parentCategory: z.string().optional(),
  // Images
  images: z
    .any()
    .refine((files) => files?.length >= 1, 'At least one image is required.')
    .refine(
      (files) => files?.every((f: File) => f.size <= MAX_FILE_SIZE),
      'Max file size is 5MB.'
    )
    .refine(
      (files) => files?.every((f: File) => ACCEPTED_IMAGE_TYPES.includes(f.type)),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    )
});

export type ProductLargeFormValues = {
  brand: string;
  category: string;
  gender: string;
  price: number | undefined;
  name: string;
  description: string;
  pageTitle: string;
  metaDescription: string;
  visibility: 'published' | 'schedule' | 'hidden';
  publishDate: string;
  parentCategory: string;
  images: File[] | undefined;
};

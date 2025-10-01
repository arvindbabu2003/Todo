export interface Task {
  id?: string;          // Firestore doc id
  title: string;
  description?: string;
  completed: boolean;
  category?: string;    // optional: Work, Personal, etc.
  priority?: number;    // optional: 1-high,2-medium,3-low
  createdAt?: any;      // Firestore timestamp
  dueDate?: any;        // optional Firestore timestamp
}

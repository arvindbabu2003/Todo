export interface Task {
  id?: string;          
  title: string;
  description?: string;
  completed: boolean;
  category?: string;    
  priority?: number;    
  createdAt?: any;     
  dueDate?: any;        
}

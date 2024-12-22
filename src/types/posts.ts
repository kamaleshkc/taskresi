// features/api/types.ts
export interface Post {
    id: number;
    title: string;
    body: string;
    
}
// Define the initial state
interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
  }

  export const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
  };
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useMemo, useState, useCallback, useEffect } from "react";
import { Post } from "@/types";
import { debounce } from "lodash";

interface UseFilteredPostsReturn {
  filteredPosts: Post[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  isSearching: boolean;
  activeFilters: {
    category: string | null;
  };
  setActiveFilters: (filters: { category: string | null }) => void;
  clearFilters: () => void;
  totalResults: number;
}

const filterPosts = (
  posts: Post[],
  searchTerm: string,
  filters: { category: string | null }
): Post[] => {
  const hasSearchTerm = searchTerm?.trim().toLowerCase();
  
  return posts.filter((post) => {
    // Search matching
    const matchesSearch = !hasSearchTerm || (
      post.title.toLowerCase().includes(hasSearchTerm) ||
      post.excerpt.toLowerCase().includes(hasSearchTerm) ||
      post.content.toLowerCase().includes(hasSearchTerm)
    );

    // Category matching
    const matchesCategory = !filters.category || post.category === filters.category;

    return matchesSearch && matchesCategory;
  });
};

export const useFilteredPosts = (
  posts: Post[],
  initialSearchTerm = "",
  delay = 300
): UseFilteredPostsReturn => {
  // Search state
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(initialSearchTerm);
  
  // Filter state
  const [activeFilters, setActiveFilters] = useState<{ category: string | null }>({
    category: null
  });

  // Debounced search
  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearchTerm(value);
    }, delay),
    [delay]
  );

  useEffect(() => {
    debouncedSetSearch(searchTerm);
    return () => debouncedSetSearch.cancel();
  }, [searchTerm, debouncedSetSearch]);

  // Filter and search posts
  const filteredPosts = useMemo(
    () => filterPosts(posts, debouncedSearchTerm, activeFilters),
    [posts, debouncedSearchTerm, activeFilters]
  );

  // Clear all filters
  const clearFilters = useCallback(() => {
    setActiveFilters({ category: null });
    setSearchTerm("");
  }, []);

  return {
    filteredPosts,
    searchTerm,
    setSearchTerm,
    isSearching: searchTerm !== debouncedSearchTerm,
    activeFilters,
    setActiveFilters,
    clearFilters,
    totalResults: filteredPosts.length
  };
};
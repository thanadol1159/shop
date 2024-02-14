export default function Service() {
    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/api/products/",
        fetcher
      );
    
      if (error) return <div>failed to load</div>;
      if (isLoading) return <div>loading...</div>;
    

}
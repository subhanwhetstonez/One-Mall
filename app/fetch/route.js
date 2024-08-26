const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:9292/student/1`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, []);

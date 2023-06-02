const errorHandler = (err, req, res, next) => {
    // Handle and log the error appropriately
    console.error(err);
  
    // Send an error response
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  export default errorHandler;
  
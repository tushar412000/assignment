import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Data = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        // Filter posts with user ID 1
        const filteredData = response.data.filter((post) => post.userId === 1);
        setPostData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderTable = () => {
    return (
      <table className="w-full border rounded-md shadow-md overflow-hidden">
        <thead className="bg-gray-200 text-sm font-medium">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postData.map((post) => (
            <tr key={post.id} className="border-b border-gray-200">
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderPieChart = () => {
    const totalPosts = postData.length;
    const user1Posts = postData.filter((post) => post.userId === 1).length;

    const data = [
      { name: 'User ID 1', value: user1Posts },
      { name: 'Other Users', value: totalPosts - user1Posts },
    ];

    const COLORS = ['#0088FE', '#00C49F'];

    return (
      <ResponsiveContainer className="mt-8 mx-auto" width="50%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <h2 className="text-3xl font-bold mb-8">Data Page</h2>
      <div className="flex flex-col flex-grow">
        {renderTable()}
        {renderPieChart()}
      </div>
    </div>
  );
};

export default Data;

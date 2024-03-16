import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUsers } from '../features/Userdetails';

function ServicesShowC() {
    const { users, loading, error } = useSelector(state => state.app);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [servicesPerPage] = useState(10);

    useEffect(() => {
        dispatch(showUsers());
    }, [dispatch]);

    // Get current services
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = users.slice(indexOfFirstService, indexOfLastService);

    // Function to paginate
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading) {
        return (
            <div className="container mx-auto px-4 text-white">
                <h1 className="text-3xl font-bold text-center mb-6">Services</h1>
                <div className="text-center">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 text-white">
                <h1 className="text-3xl font-bold text-center mb-6">Services</h1>
                <div className="text-center">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 text-white">
            <h1 className="text-3xl font-bold text-center mb-6">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {currentServices.map(service => (
                    <div key={service.id} className="border-2 border-[#000080] hover:-translate-y-2 shadow-md rounded-lg p-6">
                        <img src={service.image} alt={service.name} className="w-full border-2 h-40 object-cover mb-4 rounded-lg" />
                        <div className="text-gray-800">
                            <h2 className="text-xl font-bold mb-2">{service.name}</h2>
                            <p className="text-sm mb-4">{service.description}</p>
                            <p className="text-gray-600 text-sm">Charges: ${service.charges}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6 mb-4">
    <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1} 
        className={`mr-4 ${currentPage === 1 ? 'bg-[#000080] text-white cursor-not-allowed' : 'bg-[#000080] hover:bg-blue-800 text-white'} font-bold py-2 px-4 rounded-l`}
    >
        Previous
    </button>
    <button
        onClick={() => paginate(currentPage + 1)}
        disabled={indexOfLastService >= users.length} // Disable if indexOfLastService is greater or equal to the total number of users
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${indexOfLastService >= users.length ? 'cursor-not-allowed' : ''}`}
    >
        Next
    </button>
</div>

        </div>
    );
}

export default ServicesShowC;

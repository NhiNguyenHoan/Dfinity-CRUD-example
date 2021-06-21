import React, { useState, useEffect } from 'react';
import crud from 'ic:canisters/crud';
import { fromOptional, toOptional } from './helper';

const Display = (props) => {

    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = () => {
        crud.findAll().then((result) => {
            if (result) {
                setCustomers(result);
            }
        });
    }

    const addCustomer = (() => {
        props.history.push('/add/-1');
    });

    const deleteCustomer = ((id) => {
        crud.updateOrDelete(parseInt(id), toOptional(null)).then((result) => {
            if (result) {
                loadCustomers();
            }
        });
    });

    const editCustomer = ((id) => {
        props.history.push(`/add/${id}`);
    });

    return (
        <>
        <h2 className="text-center">List of our Customers:</h2>
        <div className="row">
            <div>
                <button className="btn btn-primary float-right" onClick={addCustomer}>
                    Add New Customer
                </button>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {<tbody>
                    {Object.entries(customers).map(
                        cust =>
                            <tr key={cust[1].id}>
                                <td>
                                    < input name="name" value={cust[1].name} type="text"
                                    />
                                </td>
                                <td>
                                    < input name="address" value={cust[1].address} type="text"
                                    />
                                </td>
                                <td>
                                    < input name="email" value={cust[1].email} type="text"
                                    />
                                </td>
                                <td>
                                    <button onClick={() => editCustomer(cust[1].id)} className="btn btn-info">Update</button>
                                    <button onClick={() => deleteCustomer(cust[1].id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                    )}
                </tbody>
                }
            </table>
        </div>
        </>
    )
}
export default Display

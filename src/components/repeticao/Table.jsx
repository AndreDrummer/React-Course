import React from 'react';
import product from '../../data/products';

export default _ => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((prod, index) => (
                        <tr key={prod.id} className={index % 2 === 0 ? "Par" : 'Impar'}>
                            <td>
                                {
                                    prod.id
                                }
                            </td>
                            <td>
                                {
                                    prod.name
                                }
                            </td>
                            <td>
                                R$ {
                                    prod.price
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}


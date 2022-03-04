import { useMemo } from 'react';
import { useTable } from 'react-table';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function useColumns() {
    const columns = useMemo(
        () => [
            {
                Header: '',
                accessor: 'image'
            },
            {
                Header: 'Name',
                accessor: 'title'
            },
            {
                Header: 'Vegan',
                accessor: 'vegan'
            },
            {
                Header: 'Ready in',
                accessor: 'readyIn'
            },
            {
                Header: 'Healt Score',
                accessor: 'healtScore'
            },
            {
                Header: 'Price',
                accessor: 'price'
            },
            {
                Header: '',
                accessor: 'delete'
            },
            {
                Header: '',
                accessor: 'detail'
            },
        ],
        []
    );
   
    return columns;
}

function useRows(recipes, removeItem) {
    const rows = 
        recipes.map( (p) => {
            return (
                {
                    image: <img className='img-thumbnail' src={p.image} alt={p.title} width='100px' />,
                    title: p.title,
                    vegan: `${p.vegan ? 'Vegan' : 'Not Vegan'}`, 
                    readyIn: `${p.readyInMinutes}`,
                    healtScore: `${p.healthScore}`,
                    price: `$${p.pricePerServing}`,
                    delete: <a href='/' className='text-center'><AiTwotoneDelete className='icon' onClick={ () => removeItem(p.id) }/></a>,
                    detail: <div className='text-center'><Link to={`/detalle/${p.id}`}><BiDetail className='icon' /></Link></div> 
                }
            )
        }) 
    return rows;
}

export const RecipeTable = ({ dishList, removeDishItem, priceTotal,  averageReadyIn, averageHealtScore, clearDishMenu }) => {
    const columns = useColumns();
    const data = useRows(dishList, removeDishItem);
    const table = useTable({ columns, data }); 
        
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = table; 

    return (
        <div className="table-responsive">
            <table className="table align-middle mt-5 mb-5" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                <th scope="col" {...column.getHeaderProps()}>
                                    {
                                        column.render('Header')
                                    }
                                </th>
                                ))
                            }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            );})
                                    }
                                </tr>
                            );
                        }) 
                    }
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td className='fw-bold table-dark'>Averages</td>
                        <td className='table-dark'>{averageReadyIn()}</td>
                        <td className='table-dark'>{averageHealtScore()}</td>
                        <td className='table-dark'>$ {priceTotal()}</td>
                        <td className='table-dark text-center'><a className="link-warning" href='/' onClick={() => clearDishMenu()}>Delete All</a></td>
                        <td className='table-dark'></td>
                    </tr>
                </tbody> 
                
            </table>            
        </div>
    )
}

export default RecipeTable; 
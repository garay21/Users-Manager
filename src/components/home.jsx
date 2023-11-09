import React from "react";

const Home = () => {
    return (
        <main>
            <div className="container container-fluid-lg">
                <h1 className='text-center'>Usuarios</h1>
                <p className='text-center'>Aplicacion para la visualizar, eliminar, actualizar y agregar Usuarios,
                    cliente como Manager para ser usados en diferentes programas.</p>				
            </div>

            <section className='container container-fluid-lg'>
                <div className='table-container table-responsive-lg'>
                    <table className='table table-striped table-dark table-sm'>
                        <thead>
                            <tr>
                                <th scope='col' >ID</th>
                                <th scope='col' >User Name</th>
                                <th scope='col' >User Contry</th>
                                <th scope='col' >User PassWord</th>
                                <th scope='col' >Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </section>
        </main>
    )
}

export default Home
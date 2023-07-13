import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginActiongetdata } from '../../Redux/actions/login_actions/loagin_actions';
import { ContextUseContextProvider } from '../../contextapi/Contextapi';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import './styles/home.scss';
function Homepage() {
    const thala = ContextUseContextProvider();
    const dispatch = useDispatch();

    const [checks, setChecks] = useState("");
    const [checks1, setChecks1] = useState("");


    const state = useSelector((state) => state?.users);
    const datas = {
        name: "kalainazriya"
    }

    const sampledata = [
        {
            id: 1,
            name: "kalai1",
            email: "kalai1@gmail.com",
            place: "chennai"

        },
        {
            id: 2,
            name: "kalai2",
            email: "kalai2@gmail.com",
            place: "chennai"

        },
        {
            id: 3,
            name: "kalai3",
            email: "kalai3@gmail.com",
            place: "chennai"

        },
        {
            id: 4,
            name: "kalai4",
            email: "kalai4@gmail.com",
            place: "chennai"

        },
        {
            id: 5,
            name: "kalai5",
            email: "kalai5@gmail.com",
            place: "chennai"

        }
    ]


    useEffect(() => {

        let isCancelled = true;

        if (isCancelled) {
            dispatch(LoginActiongetdata());
            thala.FirstSection()
        }

        return () => {
            isCancelled = false;
        }

    }, [thala?.loading])

    const editData = (data) => {
        return (
            <React.Fragment>
                <i
                    style={{ fontSize: "20px" }}
                    className="fas fa-pen mx-auto"
                    onClick={() => setChecks1(data?.name)}
                />
            </React.Fragment>
        );

    }

    const deleteData = (data) => {

        return (
            <React.Fragment>
                {/* <i
                style={{ fontSize: "20px" }}
                className="fas fa-pen mx-auto"
           
              /> */}

                <i class="fa fa-trash" aria-hidden="true" style={{ fontSize: "20px" }}
                    onClick={() => setChecks(data?.id)}
                ></i>

            </React.Fragment>
        );
    }

    const item = "kalais";
    return (
        <div className="cleaner-layout">

            Homeage {datas["name"]} id:{checks} name:{checks1}

            {/* {(() => {
             
                    switch (true) {
                        case item=="kalai": {
                            return (
                                <div>
                             {item}
                                </div>
                            )
                        }
                    }
                

            })()} */}


            {(() => {
                if (item == "kalai") {
                    return (
                        <div>
                            kalaisurya
                        </div>
                    )
                }
                else {
                    return (
                        <div>
                            thala
                        </div>
                    )
                }
            })()}

            <div className="cleaner-body">
                <DataTable value={sampledata} scrollable scrollHeight="100%" tableStyle={{ minWidth: '80%' }}>
                    <Column field="id" header="id" ></Column>
                    <Column field="name" header="name" ></Column>
                    <Column field="email" header="email"></Column>
                    <Column field="place" header="place"></Column>
                    <Column field="id" header="Edit Stylist" body={editData}></Column>
                    <Column field="id" header="View Stylist" body={deleteData}></Column>
                </DataTable>
            </div>




        </div>
    )
}

export default Homepage
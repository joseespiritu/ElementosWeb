import { useEffect, useState } from 'react';
import { principal } from '../api/principal';
import { principalInfo } from '../interfaces/principalInfo';

function PrincipalComponent() {

    const [info, setInfo] = useState<principalInfo>();

    useEffect(() => {
        principal.get<principalInfo>('/planetary/apod?api_key=0fQAZTd3R9cjdJehMW71H9CXSmiE49ZyKZY4PjtK')
        .then((response) => {
            console.log(response.data);
            setInfo(response.data);
        })
        .catch(console.log);
    }, []);

    return (
        <div>
            <div className="cointainer text-center m-md-5 m-3">
                <div>
                    <h2>{info?.title}</h2>
                </div>
                <img style={{width: 200, height: 200}} src={info?.url} alt={info?.copyright} />
                <div className="mr-5 ml-5 pl-5 pr-5 pt-3">
                    <p style={{textAlign: 'justify', textIndent: 2}}>{info?.explanation}</p>
                </div>
                <hr />
                <small>{info?.copyright} - {info?.date}</small>
            </div>
        </div>
    );
}

export default PrincipalComponent

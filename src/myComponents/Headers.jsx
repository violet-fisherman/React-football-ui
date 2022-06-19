import Categories from "./Categories"

const Headers = (props) => {
    return (
        <>
            <tr>
                <th width="500" height="50" bgcolor="#f73378" valign="middle"><font size="6">Foot Better ways</font></th>
                <th width="300"></th>
                <Categories/>
            </tr>
        </>
    );
};

export default Headers;
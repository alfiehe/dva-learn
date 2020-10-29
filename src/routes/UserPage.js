import React from 'react';
import { connect } from 'dva';

function Index() {
    return (
        <div>
            <h1>User Page</h1>
        </div>
    );
}

Index.propTypes = {
};

export default connect()(Index);


const ListCompPost = ({dataList}) => {
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>제목</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataList?.length > 0 ? 
                            (
                                dataList.map((data, rowNum) => {
                                    return (
                                    <tr key={data.postId}>
                                        <td>{rowNum + 1}</td>
                                        <td>{data.postTitle}</td>
                                        <td>{data.postRegDt}</td>
                                    </tr>
                                    );
                                })
                            )
                            : 
                            (
                                <tr>
                                    <td colSpan={3}>No Data...</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListCompPost;
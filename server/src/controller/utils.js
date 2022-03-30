


/**
* @description <format data recived to facilitate mapping on frontend>
* @param <data> <json data>
* @returns <formatedData> <format data and return in as array > 
* @author <ibtihal el maghraoui>
*/

const getFormattedData = (data)=> {
    let formatedData =[];
    data.data.directory.map((directory) => (
        Object.values(directory).map((element) => (
            Object.values(element).map((level2) => (
                Object.values(level2).map((name) => {
                    Object.values(name).map((detail) => (
                        formatedData.push({
                            level1: Object.keys(directory)[0],
                            level2: Object.keys(level2)[0],
                            name: Object.keys(detail)[0],
                            date: detail[Object.keys(detail)[0]].date,
                            type: detail[Object.keys(detail)[0]].type,
                            changed: detail[Object.keys(detail)[0]].changed,
                            size: detail[Object.keys(detail)[0]].size,
                        })
                    ))
                })
            ))
        )
        )

    )
    )
    return formatedData;
}

module.exports = {
    getFormattedData,
  };
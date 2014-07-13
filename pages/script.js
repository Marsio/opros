function Send()
{
    var req = new XMLHttpRequest();
    req.open('POST', '/createVoting', true);
    req.send(createData());
};

function createData()
{
    var data = [];

    data.push(obj('nazv', $('#nazv').val()));
    $('input', '#buttons').each(function(index, item)
    {
        data.push(obj(item.id, item.value));
    });

    function obj(name, value)
    {
        return {name: name, value: value};
    };

    return JSON.stringify(data);
}
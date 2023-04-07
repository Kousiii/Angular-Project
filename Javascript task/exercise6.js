n=[29,24,17,-9,-7,-3]
console.log(n.map(pos))

function pos(n)
{
    if(n>=0)
        return n
    else
        return n *(-1)
}
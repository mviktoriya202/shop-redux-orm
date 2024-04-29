import {useMemo} from "react";
import {ITag} from "../entities/types";

function Tag({id, name, onCLick, index}: ITag & { index: number }) {
    const colors = useMemo(() => {
        return ["#2967FF", "#58CF18", "#FFA601", "#FF7CB4"];
    }, []);

    const colorIndex = index % colors.length;
    const backgroundColor = colors[colorIndex];

    return (
        <button onClick={() => {
            onCLick(id);
        }}
                style={{backgroundColor: backgroundColor}}
                className="p-[10px] rounded-[40px] text-white font-raleway truncate max-w-[200px] font-semibold leading-[19px] text-center">
            {name}
        </button>
    );
}

export default Tag;

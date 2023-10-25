import { TbSearch } from "react-icons/tb"
import { SearchProps } from "@/utils/interface";

const Search = ({ search, onSetSearch, holder } : SearchProps) => {
  return (
    <div className="relative mb-4 sm:mb-0">   
      <input 
        className="text-[#555] bg-[#fff] outline-none border border-gray-300 rounded-xl py-2 pl-4 pr-8 w-[300px] sm:w-[350px]"
        type="text" 
        placeholder={holder}
        value={search}
        onChange={onSetSearch}
      />
      <TbSearch className="absolute top-[10px] right-3 text-xl text-[#888]"/>
    </div> 
  )
}

export default Search

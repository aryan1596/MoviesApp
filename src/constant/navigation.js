import { FaHome } from "react-icons/fa";
import { PiTelevisionBold } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { GoSearch } from "react-icons/go";


export const navigation =[
    {
      label : "Tv Shows",
      href : 'tv',
      Icon : <PiTelevisionBold />
    },
    {
      label : "Movies",
      href : 'movie',
      Icon : <BiSolidMoviePlay />
    }
  ]
  
  export const mobileNavigation = [
    {
      label: "Home",
      href : "/",
      Icon : <FaHome />
    },
    ...navigation,
    {
        label : "search",
        href : "/search",
        Icon : <GoSearch />
    }
  ]
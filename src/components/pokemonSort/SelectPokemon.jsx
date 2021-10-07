import { useSelectProvider } from "../../context/SelectContext";
import './selectpokemon.css';

export default function SelectPokemon() {

    const { roles,
        setRoles,
        styles,
        setStyles,
        difficulty,
        setDifficulty,
        type,
        setType } = useSelectProvider();

    var allRole = [
        { label: "Role", value: "all" },
        { label: "Attacker", value: "attacker" },
        { label: "All Rounder", value: "all_rounder" },
        { label: "Defender", value: "defender" },
        { label: "Speedster", value: "speedster" },
        { label: "Supporter", value: "supporter" }
      ];

    var allStyle = [
        { label: "Style", value: "all" },
        { label: "Special", value: "special" },
        { label: "Physical", value: "physical" }
    ];

    var allDifficulty = [
        { label: "Difficulty", value: "all" },
        { label: "Novice", value: "novice" },
        { label: "Intermediate", value: "intermediate" },
        { label: "Expert", value: "expert" }
    ];

    var allType = [
        { label: "Type", value: "all" },
        { label: "Melee", value: "melee" },
        { label: "Ranged", value: "ranged" }
    ];

    const handleChange = (e) => {
        e.preventDefault()
        switch(e.target.id) {
            case 'roles':
                setRoles(e.target.value)
                break;
            case 'styles':
                setStyles(e.target.value)
                break;
            case 'difficulty':
                setDifficulty(e.target.value)
                break;
            case 'type':
                setType(e.target.value)
                break;
            default:

        }
    }
    

    return (
      <div
        className="select-pokemon">
        <Select 
            id="roles" 
            value={roles} 
            handleChange={handleChange} 
            selections={allRole}/>
        <Select 
        id="styles"
            value={styles} 
            handleChange={handleChange} 
            selections={allStyle}/>
        <Select 
            id="difficulty"
            value={difficulty} 
            handleChange={handleChange} 
            selections={allDifficulty}/>
        <Select 
            id="type"
            value={type} 
            handleChange={handleChange} 
            selections={allType}/>
      </div>
    );
  }
  

function Select({ id, value, handleChange, selections }) {
    return (
      <div>
        <select
          value={value}
          name="role slect"
          id={id}
          onChange={handleChange}
        >
          {selections.map(role => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
        {
          value !== "all" 
          ? <button onClick={handleChange} id={id} value="all">X</button> 
          : null
        }
      </div>
    );
  }
import Radio from "@mui/material/Radio";
import MuiRadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioGroup = () => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">YOU ARE:</FormLabel>
      <MuiRadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="radioGroup"
      >
        <FormControlLabel value="student" control={<Radio />} label="Student" />
        <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;

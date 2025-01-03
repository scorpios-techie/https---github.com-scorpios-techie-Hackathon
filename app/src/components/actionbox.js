import ActionButton from "./actionbutton";
import ListSummary from "./listsummary";
import SuggestionContainer from "./suggestionContainer";

const ActionBox = ({ Item }) => {
  const Suggestions = ["Suggest", "Suggestgf", "Sugge"];
  let blueStyle = { backgroundColor: "#007bff" };
  return (
    <div>
      <div>
        <ListSummary Item={Item} />
      </div>

      <div>
        <ActionButton style={blueStyle} Text="Defer" />
        <ActionButton style={blueStyle} Text="Provide Solution" />
      </div>

      <SuggestionContainer Suggestions={Suggestions} />

      <textarea
        style={{
          minHeight: "100px",
          width: "70%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
          resize: "vertical",
        }}
        placeholder="Enter manual feedback"
      ></textarea>

      <ActionButton Text="Submit" />
    </div>
  );
};
export default ActionBox;

import React, { useContext } from "react";
import { StateContext } from "../pages/_app";
import { FormLabel } from "./FormLabel";

export const BadgeSelector = ({
  badgeType,
  badgeText,
  profileLink,
  handleBadgeClick,
}) => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <label
      className={`border select-none btn-sm bg-dark-700 ${
        !state.socials[profileLink].linkSuffix.length > 0
          ? "opacity-30"
          : "opacity-100"
      }`}
    >
      <input
        type="checkbox"
        name={badgeType}
        value={state.badges[badgeType]}
        onChange={handleBadgeClick}
        className="checkbox-input"
        checked={state.badges[badgeType]}
        disabled={
          !state.socials[profileLink].linkSuffix.length > 0 ? true : false
        }
      />
      <span className="text-xs text-white">{badgeText}</span>
    </label>
  );
};
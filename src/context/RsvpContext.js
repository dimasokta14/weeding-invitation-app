import React, { useEffect } from "react";

const RsvpContext = React.createContext();

const RsvpProvider = ({ children }) => {
	return <RsvpContext.Provider>{children}</RsvpContext.Provider>;
};

export { RsvpContext, RsvpProvider };

export const renderSpecs = (details, isTopLevel = true) => {
  let keys = Object.keys(details).filter((key) => key !== "id");

  if (isTopLevel) {
    keys = keys.reverse();
  }

  return keys.map((key) => {
    const value = details[key];
    const displayKey = key.replace(/_/g, " ");
    if (typeof value === "object" && value !== null) {
      return (
        <div key={displayKey} className="my-3">
          <h2 className="font-semibold md:text-lg text-sm bg-gray-100 p-2">
            {displayKey}
          </h2>
          <div>{renderSpecs(value, false)}</div>
        </div>
      );
    }
    const formattedValue =
      typeof value === "string" ? value?.replace(/\n/g, "<br/>") : value;
    return (
      <div key={displayKey} className="flex py-2 px-2  md:text-base text-sm">
        <span className="font-medium text-gray-700 w-4/6 md:w-1/4">
          {displayKey}
        </span>
        <span
          className="text-gray-900 w-full px-1"
          dangerouslySetInnerHTML={{ __html: formattedValue }}
        ></span>
      </div>
    );
  });
};

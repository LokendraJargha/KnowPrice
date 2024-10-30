export const formatKey = (key) =>
  key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const removeIdFromObject = (obj) => {
  if (!obj || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(removeIdFromObject);
  }

  const { id, ...rest } = obj;
  const newObj = {};

  for (const [key, value] of Object.entries(rest)) {
    newObj[key] = removeIdFromObject(value);
  }

  return newObj;
};

export const extractSpecs = (product) => {
  if (!product || !product.attributes) {
    console.error("Product attributes are undefined:", product);
    return { Title: "Unknown", specs: {} };
  }

  const { Title = "Unknown", MobileSpecification = {} } = product.attributes;

  const specs = removeIdFromObject(MobileSpecification);

  return {
    Title,
    specs: Object.fromEntries(
      Object.entries(specs).map(([key, value]) => [formatKey(key), value])
    ),
  };
};

export const renderSpecValue = (value, isNested = false) => {
  if (typeof value === "object" && value !== null) {
    return (
      <div className={isNested ? "pl-4" : ""}>
        {Object.entries(value).map(([key, val]) => (
          <div key={key}>
            <strong>{formatKey(key)}:</strong> {renderSpecValue(val, true)}
          </div>
        ))}
      </div>
    );
  }
  const formattedValue =
    typeof value === "string" ? value?.replace(/\n/g, "<br/>") : value;
  return (
    <span
      className="text-gray-900 w-full"
      dangerouslySetInnerHTML={{ __html: formattedValue }}
    ></span>
  );
};

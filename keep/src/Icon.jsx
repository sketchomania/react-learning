import React, { useEffect, useState } from "react";

function Icon({ name, ...otherProps }) {
  const [iconModule, setIconModule] = useState(null);

  useEffect(() => {
    import(`./icons/${name}_black_24dp.svg`)
      .then((module) => {
        setIconModule(module);
      })
      .catch((error) => {
        console.error(`Icon with name: ${name} not found!`);
      });
  }, [name]);

  const renderIcon = () => {
    if (!iconModule) return null;

    const Component = iconModule.ReactComponent;

    return <Component {...otherProps} />;
  };

  return <>{renderIcon()}</>;
}

export default Icon;

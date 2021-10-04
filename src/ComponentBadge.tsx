export interface ComponentName
{
  componentName: string
}

export default function ComponentBadge(props: ComponentName)
{
  return (
    <div className="badge-position badge-skin">
      {props.componentName}
    </div>
  );
}
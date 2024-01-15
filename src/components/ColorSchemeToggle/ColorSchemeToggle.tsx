import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button color="teal" onClick={() => setColorScheme('light')}>Light</Button>
      <Button color="teal" onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button color="teal" onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
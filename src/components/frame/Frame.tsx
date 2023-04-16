import { ReactNode } from "react";
import { Container, Grid, Paper, styled } from "@mui/material";

/**
 * Provides main container with background and children stacked in a column.
 */

const BasePaper = styled(Paper)(({ theme }) => ({
  borderRadius: 15,
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
}));

type FrameProps = {
  children: ReactNode;
};

function Frame({ children }: FrameProps) {
  return (
    <Container maxWidth="sm">
      <BasePaper elevation={3}>
        <Grid container spacing={1}>
          {children}
        </Grid>
      </BasePaper>
    </Container>
  );
}

type FrameSlotProps = {
  children: ReactNode;
};

function FrameSlot({ children }: FrameSlotProps) {
  return (
    <Grid item xs={12}>
      {children}
    </Grid>
  );
}

export { Frame, FrameSlot };

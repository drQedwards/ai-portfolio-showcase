import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Cpu, Package } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          PMLL & PPM
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The TechRxiv white papers on persistent memory and recursive transformers
          now ship as running software: the Persistent Memory Logic Loop runtime and
          the Python Package Manager that carries it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30 overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/20 shrink-0">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-xl font-bold text-foreground">PMLL</h3>
                  <Badge variant="secondary">Persistent Memory Logic Loop</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Agent memory from the TechRxiv PMLL / RTM / ERS papers: a short-term
                  KV cache (peek pattern, Q-promise deduplication, mirroring{" "}
                  <code className="text-xs">PMLL.c::memory_silo_t</code>) plus a long-term
                  semantic graph adapted from{" "}
                  <a
                    href="https://github.com/ForLoopCodes/contextplus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Context+
                  </a>
                  {" "}(typed nodes, weighted edges, temporal decay).
                </p>
                <p className="text-xs text-muted-foreground/80 mb-4">
                  <code className="text-xs">pmll-memory-mcp</code> on PyPI (v2.0.4) is the
                  MCP server. Four-way benchmark, fastest config: combined Context+ +
                  PMLL/peek at 36ms (TS) / 78ms (PY). Semantic silo vectors, Q-promise
                  continuations, and SQLite-backed graph persistence on the Python side.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href="https://github.com/drQedwards/pmll"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href="https://pypi.org/project/pmll-memory-mcp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      PyPI
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-primary/5 border-accent/30 overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/20 shrink-0">
                <Package className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-xl font-bold text-foreground">PPM</h3>
                  <Badge variant="secondary">Python Package Manager</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Packaging and tooling around the same persistent-memory research:
                  hermetic packaging, GPU-accelerated verification, cryptographic
                  signing, and the companion PMLL Memory MCP inside Context+ and
                  supermodeltools.
                </p>
                <p className="text-xs text-muted-foreground/80 mb-4">
                  PPM is the distribution layer for the white papers, not a separate
                  product. Same memory loop, same graph, shipped so coding agents can
                  actually use it.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href="https://github.com/drQedwards/PPM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href="https://www.techrxiv.org/users/856117"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      TechRxiv
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
